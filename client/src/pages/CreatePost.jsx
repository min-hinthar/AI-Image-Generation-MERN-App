import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }
  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {
    
  }

  return (
    <section className='max-w-7xl mx-auto'>
        {/* Heading and Subtitle */}
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Create AI Images 
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
          Explore to test out your very own DALL-E OpenAI generated images! Share your creativity with the community!
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
            labelName='Your Name'
            type='text'
            name='name'
            placeholder='Aung San Suu Kyi'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField 
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='a surrealist dream-like oil painting by Salvador Dalí of a cat playing chess with Van Gogh in a starry night'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost