"use client";
import { TaskDto } from "@/app/models/task.model";
import { moneyFormat } from "@/app/utils/helper";

type TaskCardProps = {
    task: TaskDto;
    active?: boolean;
    onClick?: () => void;
};

const TaskCard = ({ task, active, onClick }: TaskCardProps) => {
    return (
        <div 
            onClick={onClick}
            role="button"
            className={`w-full p-[15px] border space-y-2.5 cursor-pointer 
                ${active 
                    ? "bg-dark-400 border-light-100" 
                    : "border-primary-200 hover:border-dark-200 hover:bg-dark-400"}
            `}
        >
            <div className="flex items-center gap-1.5">
                <p className="text-body-tiny text-primary-400">#{task.issue.number}</p>
                {task.issue.labels?.length > 0 && (
                    <p className="py-0.5 px-[7px] bg-primary-300 text-body-tiny font-bold text-light-200 truncate">
                        {task.issue.labels
                            .map(label => label.name)
                            .map((name, index, array) => 
                                index === array.length - 1 ? name : `${name}, `
                            )
                            .join('')}
                    </p>
                )}
                <p className="text-body-medium text-primary-400 font-bold ml-auto">{moneyFormat(task.bounty)} USDC</p>
            </div>
            <p 
                className="text-body-medium text-light-100 overflow-hidden leading-5"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    maxHeight: '2.5rem', 
                    lineHeight: '1.25rem'
                }}
            >
                {task.issue.title}
            </p>
            <p className="text-body-tiny font-bold text-light-200 mt-[15px]">
                {task.project?.name}
            </p>
        </div>
    );
}
 
export default TaskCard;