import { Heart, MessageCircleIcon, Share2 } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import { TPost } from '@/types'
import Menu from './Menu'
import { useState } from 'react'
import CommentsDialog from './CommentsDialog'
import Avatar from './ui/avatar'

type TProps = {
  post: TPost
}
export default function Post({ post }: TProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-white rounded-lg shadow-lg'>
      <div className='flex items-start gap-2 p-3'>
        <Avatar />
        <div>
          <h1 className='font-medium'>User Name</h1>
          <p className='text-xs'>@user_name · 21 minutes ago</p>
        </div>
        <div className='ml-auto'>
          <Menu />
        </div>
      </div>
      <p className='bg-slate-50 border-l-4 px-3 text-sm font-medium py-1 border-slate-300 uppercase'>
        {post.title}
      </p>
      <p className='p-4 pb-2'>{post.body}</p>
      <p className='px-4 py-2 text-sm'>You and 32 others</p>
      <CommentsDialog
        postId={post.id}
        open={open}
        setOpen={setOpen}
      />
      <div className='px-4'>
        <div className='border-t border-slate-200 py-2 w-full flex items-center justify-between gap-2'>
          <button className='action text-rose-500'>
            <Heart
              strokeWidth={2.6}
              className='size-4'
            />
            <span>Love</span>
          </button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className='action'
                  onClick={() => setOpen(true)}
                >
                  <MessageCircleIcon
                    strokeWidth={2.6}
                    className='size-4'
                  />
                  <span>Comment</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className='text-white'>Click to see comments.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <button className='action'>
            <Share2
              strokeWidth={2.6}
              className='size-4'
            />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}
