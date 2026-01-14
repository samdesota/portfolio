import resumeContent from "../resume.md?raw";
import { A, cache, createAsync } from "@solidjs/router";
import { marked } from "marked";

const getResumeHTML = cache(async () => {
  "use server";
  return marked.parse(resumeContent);
}, "resume");

export default function Resume() {
  const html = createAsync(() => getResumeHTML());

  return (
    <main>
      <div class="resume-container section">
        <A href="/">← Home</A>
        <div innerHTML={html()} />
      </div>
    </main>
  );
}



