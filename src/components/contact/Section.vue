<script setup lang="ts">
interface ContactMessage {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const formInfo = reactive<ContactMessage>({
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
});

const formErrors = reactive<Partial<ContactMessage>>({
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
});

function submit(): void {
  $fetch("/api/contact", { method: "POST", body: formInfo })
    .then(() => clearForm)
    .catch(({ data: { data } }) => setErrors(data));
}

function clearForm(): void {
  formInfo.name = "";
  formInfo.email = "";
  formInfo.company = "";
  formInfo.phone = "";
  formInfo.message = "";
}

function setErrors(errors?: ContactMessage): void {
  formErrors.name = errors?.name ?? "";
  formErrors.email = errors?.email ?? "";
  formErrors.company = errors?.company ?? "";
  formErrors.phone = errors?.phone ?? "";
  formErrors.message = errors?.message ?? "";
}
</script>

<template>
  <!-- Contact -->
  <div class="bg-neutral-900">
    <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
      <!-- Title -->
      <div class="max-w-3xl mb-10 lg:mb-14">
        <h2
          class="text-white font-semibold text-2xl md:text-4xl md:leading-tight"
        >
          Contact us
        </h2>
        <p class="mt-1 text-neutral-400">We'd love to hear from you.</p>
        <p class="mt-1 text-neutral-400">
          Use this form to request pricing and additional information about a
          custom R-Blocks solution for your next building project.
        </p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
        <div
          class="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0"
        >
          <form>
            <div class="space-y-4">
              <ContactTextInput
                label="Name"
                v-model="formInfo.name"
                v-model:error="formErrors.name"
              />
              <ContactTextInput
                label="Email"
                v-model="formInfo.email"
                v-model:error="formErrors.email"
              />
              <ContactTextInput
                label="Company (optional)"
                v-model="formInfo.company"
                v-model:error="formErrors.company"
              />
              <ContactTextInput
                label="Phone"
                v-model="formInfo.phone"
                v-model:error="formErrors.phone"
              />
              <ContactTextArea
                label="Tell us about your project"
                v-model="formInfo.message"
                v-model:error="formErrors.message"
              />
            </div>

            <div class="mt-2">
              <p class="text-xs text-neutral-500">
                We'll get back to you in 1-2 business days.
              </p>

              <p class="mt-5">
                <a
                  class="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  @click="submit()"
                >
                  Submit
                  <svg
                    class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </p>
            </div>
          </form>
        </div>
        <!-- End Col -->

        <div class="space-y-14">
          <!-- Item -->
          <div class="flex gap-x-5">
            <svg
              class="flex-shrink-0 size-6 text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div class="grow">
              <h4 class="text-white font-semibold">Our address:</h4>

              <address class="mt-1 text-neutral-400 text-sm not-italic">
                1982 N 2800 W<br />
                Provo, UT 84601
              </address>
            </div>
          </div>
          <!-- End Item -->

          <!-- Item -->
          <div class="flex gap-x-5">
            <svg
              class="flex-shrink-0 size-6 text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
              />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div class="grow">
              <h4 class="text-white font-semibold">Email us:</h4>

              <a
                class="mt-1 text-neutral-400"
                href="mailto:info@thermalblocksusa.com"
                target="_blank"
              >
                info@rblocksusa.com
              </a>
            </div>
          </div>
          <!-- End Item -->

          <!-- Item -->
          <div class="flex gap-x-5">
            <svg
              class="flex-shrink-0 size-6 text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m3 11 18-5v12L3 14v-3z" />
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
            <div class="grow" id="call-text">
              <h4 class="text-white font-semibold">Call or text us any time:</h4>
              <div class="grid grid-cols-2 grid-rows-2 grid-flow-col py-1 text-neutral-400">
                <p>Dan Jensen, CEO</p>
                <a href="tel:8016645907">(801) 664-5907</a>

                <p>Mitchell Scott, President</p>
                <a href="tel:5039497698">(503) 949-7698</a>
              </div>
            </div>
          </div>
          <!-- End Item -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
  </div>
  <!-- End Contact -->
</template>
