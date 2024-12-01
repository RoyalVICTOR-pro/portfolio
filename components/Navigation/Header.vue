<template>
  <header
    v-if="!isMobile"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4"
    :class="[
      isScrolled
        ? 'bg-background/80 backdrop-blur-md shadow-sm'
        : 'bg-transparent',
    ]"
  >
    <div
      class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300"
      :class="{ 'opacity-10': isScrolled }"
    ></div>
    <div class="relative z-10 w-full">
      <div
        class="flex flex-row max-w-7xl mx-auto justify-between h-16 items-center"
      >
        <div class="flex flex-row h-full lg:space-x-2 items-center">
          <Available class="hidden lg:block" />
          <ColorModeButton />
        </div>
        <div class="">
          <nav>
            <NavigationMenu className="flex flex-row space-x-6" />
          </nav>
        </div>
        <div>
          <NavigationIconButtonsSet />
        </div>
      </div>
    </div>
  </header>
  <header
    v-else
    class="fixed bottom-4 right-4 z-50 transition-all duration-300"
  >
    <Sheet>
      <SheetTrigger>
        <div class="bg-gradient-primary p-2 text-white rounded-sm">
          <IconBurger />
        </div>
      </SheetTrigger>
      <SheetContent
        side="right"
        :closeButton="false"
        class="max-w-[90vw] sm:max-w-[90vw] border-none [&>button:has(svg.lucide-xicon)]:hidden dark:bg-zinc-900 bg-zinc-100"
      >
        <SheetHeader class="h-full">
          <SheetDescription class="flex flex-col space-y-6 h-full">
            <div class="flex flex-col h-full justify-between items-end">
              <Available />
              <div>
                <NavigationMenu
                  className="flex flex-col space-y-6 items-end text-xl"
                />
                <div
                  class="flex flex-row space-x-4 items-center justify-end mt-12"
                >
                  <ColorModeButton class="" />
                  <NavigationIconLink url="https://github.com/RoyalVICTOR-pro">
                    <IconGithub />
                  </NavigationIconLink>
                  <NavigationIconLink
                    url="https://www.linkedin.com/in/royal-victor-developpeur-fullstack-chef-de-projet"
                  >
                    <IconLinkedIn />
                  </NavigationIconLink>
                  <NavigationIconLink url="mailto:royal.victor.pro@gmail.com">
                    <IconMail />
                  </NavigationIconLink>
                  <div>
                    <SheetClose as-child>
                      <IconClose />
                    </SheetClose>
                  </div>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </header>
</template>

<script lang="ts" setup>
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

const isScrolled = ref(false)
const isMobile = useIsMobile()

// Exposez isScrolled pour qu'il puisse être mis à jour depuis le parent
defineExpose({ isScrolled })
</script>

<style scoped></style>
