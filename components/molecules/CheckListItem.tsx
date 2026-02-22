import CheckIcon from "../atoms/CheckIcon";

interface CheckListItemProps {
  title: string;
  description: string;
}

export default function CheckListItem({
  title,
  description,
}: CheckListItemProps) {
  return (
    <li className="flex items-start gap-2 sm:gap-3">
      <CheckIcon />
      <div>
        <strong className="text-base sm:text-lg text-gray-900 dark:text-gray-200">
          {title}
        </strong>
        <br />
        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-400">
          {description}
        </span>
      </div>
    </li>
  );
}
