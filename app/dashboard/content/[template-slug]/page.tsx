"use client";
import React, { useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params['template-slug']
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const { user } = useUser();

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    try {
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      if (!formData || !SelectedPrompt) {
        throw new Error('Form data or selected prompt is missing.');
      }

      const FinalAIPrompt = JSON.stringify(formData) + ' , ' + SelectedPrompt;
      console.log('Final AI Prompt:', FinalAIPrompt);

      const result = await chatSession.sendMessage(FinalAIPrompt);
      const aiResponseText = await result?.response.text();

      setAiOutput(aiResponseText);
      await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug, aiResponseText);
    } catch (error) {
      console.error('Error generating AI content:', error);
      setAiOutput('An error occurred while generating the content. Please try again.');
    }
    setLoading(false);
  };

  const SaveInDb = async (formData: string, slug: string | undefined, aiResp: string) => {
    if (!formData || !slug || !aiResp) {
      console.error('Missing data for saving to DB:', { formData, slug, aiResp });
      return;
    }
    try {
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: user?.id ?? '', // Ensure this matches your schema
        createdAt: moment().format(), // Ensure this matches your schema
      });
    } catch (error) {
      console.error('Error saving to DB:', error);
    }
  };

  return (
    <div className="p-5">
      <Link href={'/dashboard'}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* form section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        {/* output section */}
        <div className="col-span-2">
          <OutputSection aiOutPut={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
