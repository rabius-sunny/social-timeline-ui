import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useGetComments } from '@/hooks/useGetData'
import Avatar from './ui/avatar'
import CommentSkeleton from './skeleton/CommentSkeleton'

type TProps = {
  postId: number
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CommentsDialog({ postId, open, setOpen }: TProps) {
  const { data, isLoading } = useGetComments(postId, open)
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comments of this post</DialogTitle>
        </DialogHeader>
        <div className='grid gap-3 max-h-96 overflow-y-auto c-scroll py-4'>
          {isLoading && !data && <CommentSkeleton />}
          {data?.map((item, idx) => (
            <div
              key={idx}
              className='flex items-start gap-2'
            >
              <div>
                <Avatar />
              </div>
              <div className='bg-black/10 p-2 rounded-xl'>
                <h1 className='font-medium'>User Name</h1>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose
            className='bg-black text-white btn mt-4'
            onClick={() => setOpen(false)}
          >
            Close
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
