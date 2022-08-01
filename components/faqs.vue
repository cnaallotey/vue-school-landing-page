<template>
  <div>
    <div class="w-full py-10 md:py-16 lg:py-32">
      <div class="max-w-screen-md mx-auto px-4">
        <p
          class="text-primary-text text-3xl md:text-4xl lg:text-5xl font-circular text-center leading-10 font-medium"
        >
          Do you have any questions?
        </p>
        <div class="w-full mt-5 md:mt-10">
          <div
            class="border-gray-200 py-8"
            v-for="faq in faqs"
            :key="faq.que"
            :class="faqs.indexOf(faq) + 1 == faqs.length ? 'border-b-0' : 'border-b'"
          >
            <button
              class="w-full py-3 inline-flex justify-between text-primary-text text-base md:text-xl font-medium leading-6 font-sans"
              @click="showAns(faq)"
              :disabled="!faq.ans ? true : false"
            >
              <span>{{ faq.que }}</span
              ><span v-if="!faq.open"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
              <span v-else
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
            </button>
            <p
              class="mt-6 md:mt-8 text-xs md:text-sm max-w-sm md:max-w-full font-normal leading-6 md:leading-7 text-secondary-text font-sans"
              v-if="faq.open"
            >
              {{ faq.ans }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    que: "How can I cancel my subscription?",
    ans:
      " You can cancel your subscription at any time through your Profile page. We will not renew your subscription after you've canceled it, and you will have full access to the courses in your grace period.",
    open: false,
  },
  { que: "Can I download the lessons?", ans: "", open: false },
  { que: "Renewal price", ans: "", open: false },
]);

const showAns = (faq) => {
  const index = faqs.value.indexOf(faq);
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
