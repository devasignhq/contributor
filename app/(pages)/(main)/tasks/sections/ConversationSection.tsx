"use client";
import Image from "next/image";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import { CommentDto, CommentType } from "@/app/models/comment.model";
import { useRef, useState } from "react";
import { FiCheckCircle, FiArrowUp } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";

const ConversationSection = () => {
    // const activeTask = useContext(ActiveTaskContext);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [comments] = useState<CommentDto[]>([]);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        textarea.style.height = 'auto';
        textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    };

    return (
        <section className="grow pt-5 border-x border-dark-200 flex flex-col">
            <div className={`grow px-5 mb-[30px] overflow-y-auto ${comments.length < 1 ? "grid place-content-center" : ""}`}>
                {comments.length < 1 ? (
                    <div className="space-y-2.5 text-center">
                        <Image 
                            src="/mdi_greeting.png" 
                            alt="" 
                            width={24}
                            height={24}
                            className="mx-auto"
                        />
                        <h6 className="text-body-large text-light-100">Say “Hi” to the project maintainer</h6>
                        <p className="text-body-tiny text-dark-100">
                            Ask questions when you have one and the PM will 
                            <br /> get it via email even while offline.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="w-fit px-[15px] py-[3px] my-5 mx-auto border border-primary-200 text-body-medium text-light-200">
                            Monday - 02/05/2025
                        </div>
                        {comments.map((comment) => {
                            return comment.attachments.length === 0 ? (
                                <div 
                                    key={comment.id} 
                                    className={`max-w-[78%] p-[15px] space-y-2.5 mb-[30px]
                                        ${comment.type === CommentType.TIMELINE_MODIFICATION 
                                            ? "bg-primary-300 float-left" 
                                            : "bg-dark-300 float-right"}`
                                    }
                                >
                                    <p className="text-body-medium text-light-100">{comment.message}</p>
                                    <small className="text-body-tiny font-bold text-dark-200">3:45 PM</small>
                                </div>
                            ):(
                                <div className="max-w-[78%] space-y-2.5 mb-[30px]">
                                    <div 
                                        key={comment.id} 
                                        className="max-w-full p-[15px] bg-dark-400 border border-dark-300 float-left space-y-5"
                                    >
                                        <p className="text-body-medium text-light-100">{comment.message}</p>
                                        <div className="flex gap-2.5">
                                            <ButtonPrimary
                                                format="OUTLINE"
                                                text="Reject"
                                                attributes={{
                                                    onClick: () => {},
                                                }}
                                            />
                                            <ButtonPrimary
                                                format="SOLID"
                                                text="Approve"
                                                attributes={{
                                                    onClick: () => {},
                                                }}
                                            />
                                        </div>
                                        <small className="text-body-tiny font-bold text-dark-200">3:45 PM</small>
                                    </div>
                                    <div className="w-full p-2.5 bg-dark-400 border border-indicator-100 flex items-center gap-2.5">
                                        <FiCheckCircle className="text-2xl text-indicator-100" />
                                        <p className="text-body-medium text-dark-100">
                                            You’ve extended the timeline of this task by 2 days.
                                        </p>
                                    </div>
                                    <div className="w-full p-2.5 bg-dark-400 border border-indicator-500 flex items-center gap-2.5">
                                        <MdOutlineCancel className="text-2xl text-indicator-500" />
                                        <p className="text-body-medium text-dark-100">
                                            Timeline extension rejected.
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
            <div className="w-full px-5 mb-[30px]">
                <div className="py-[15px] pl-5 pr-2.5 border border-dark-100 space-y-5">
                    <textarea 
                        ref={textareaRef}
                        onInput={adjustHeight}
                        placeholder="Write message and send to PM..."
                        className="w-full resize-none text-light-100 min-h-[20px]"
                    />
                    <div className="flex items-center justify-between">
                        <button 
                            className="flex items-center gap-[5px] text-primary-100 text-button-large font-extrabold hover:text-light-100"
                            onClick={() => {}}
                        >
                            <span>Upload File</span>
                            <HiPlus className="text-2xl" />
                        </button>
                        <button 
                            className="h-[30px] w-[30px] text-dark-500 bg-primary-400 hover:bg-light-100 grid place-items-center"
                            onClick={() => {}}
                        >
                            <FiArrowUp className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default ConversationSection;

// export const sampleComments: CommentDto[] = [
//     {
//         id: "40",
//         userId: "user2",
//         taskId: "task1",
//         type: CommentType.TIMELINE_MODIFICATION,
//         message: "Looking at the scope, we might need to adjust the timeline. What do you think about extending it by 2 weeks?",
//         metadata: {
//             requestedTimeline: 14,
//             newTimeline: 28
//         },
//         attachments: [],
//         createdAt: "2024-05-07T10:15:00Z",
//         updatedAt: "2024-05-07T10:15:00Z"
//     },
//     {
//         id: "1",
//         userId: "user1",
//         taskId: "task1",
//         type: CommentType.GENERAL,
//         message: "Hi! I'm interested in working on this task. I have experience with similar implementations.",
//         attachments: [],
//         createdAt: "2024-05-07T09:30:00Z",
//         updatedAt: "2024-05-07T09:30:00Z"
//     },
//     {
//         id: "2",
//         userId: "user2",
//         taskId: "task1",
//         type: CommentType.GENERAL,
//         message: "Great! Can you share some examples of your previous work?",
//         attachments: [],
//         createdAt: "2024-05-07T09:45:00Z",
//         updatedAt: "2024-05-07T09:45:00Z"
//     },
//     {
//         id: "3",
//         userId: "user1",
//         taskId: "task1",
//         type: CommentType.GENERAL,
//         message: "Sure! Here's a link to my portfolio and some relevant projects I've worked on.",
//         attachments: [],
//         createdAt: "2024-05-07T10:00:00Z",
//         updatedAt: "2024-05-07T10:00:00Z"
//     },
//     {
//         id: "4",
//         userId: "user2",
//         taskId: "task1",
//         type: CommentType.TIMELINE_MODIFICATION,
//         message: "Looking at the scope, we might need to adjust the timeline. What do you think about extending it by 2 weeks?",
//         metadata: {
//             requestedTimeline: 14,
//             newTimeline: 28
//         },
//         attachments: ["https://example.com/scope.pdf"],
//         createdAt: "2024-05-07T10:15:00Z",
//         updatedAt: "2024-05-07T10:15:00Z"
//     },
//     {
//         id: "5",
//         userId: "user1",
//         taskId: "task1",
//         type: CommentType.GENERAL,
//         message: "That sounds reasonable. I can provide detailed progress updates every 3 days to ensure we stay on track.",
//         attachments: [],
//         createdAt: "2024-05-07T10:30:00Z",
//         updatedAt: "2024-05-07T10:30:00Z"
//     }
// ];