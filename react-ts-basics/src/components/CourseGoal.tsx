import { PropsWithChildren } from "react";

// Could also be a type - interface is probably better, more extensible
// 2 approaches:
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
//   onDelete: (id: number) => void;
// }

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// Another Syntax:
// const CourseGoal: FC<CourseGoalProps> = ({
//   title,
//   children,
// }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };
// export default CourseGoal;
