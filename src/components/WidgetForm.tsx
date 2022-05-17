import { CloseButton } from "./CloseButton";

export function WidgetForm() {

  const feedbackTypes = {
    BUG: {
      title: 'Issue'
    },
    IDEA: {
      title: 'Idea'
    },
    OTHER: {
      title: 'Other'
    }
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Give your feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>

      <footer className="text-xs text-neutral-400">
        Made with ♥ by <a className="underline underline-offset-2" href="https://github.com/brunabdesouza/Feedback-Widget">Bruna</a>
      </footer>
    </div>
  );
}