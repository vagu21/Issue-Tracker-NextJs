"use client"
import { useState } from 'react';
import { Button, Callout, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error,setError]=useState('');

  return (
<div>
{error&& <Callout.Root color='red' className='mb-5'>
  <Callout.Text>{error}</Callout.Text>
  </Callout.Root>}

    <form 
      className='max-w-xl space-y-3' 
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post('/api/issues', data);
          router.push('/issues');
        } catch (error) {
          console.error(error);
          setError('Error creating issue');
           
        }
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')  } />
      </TextField.Root>
      
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder='Description' {...field} />
        )}
      />
      
      <Button type="submit">Submit New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssuePage