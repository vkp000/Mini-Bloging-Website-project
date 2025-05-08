import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'


export default function RTE({name, control, label, defaultValue=""}) {
    return (
        <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
        
        <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange} }) => (
            <Editor
            apiKey='7y8eqc1mq60x0ju7kuf3vq33ssim7r5s3jmfglx11zyydzae'
            initialValue={defaultValue}
             init={{

                
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "help",
                    "wordcount",
                    "anchor",
                    "nonbreaking",
                ],
                toolbar:
                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            />
        )}
        />
        
        </div>
    )
}


















































