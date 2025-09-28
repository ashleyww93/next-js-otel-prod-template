import type { Meta, StoryObj } from "@storybook/nextjs"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import StyleSelector from "@/components/StyleSelector"

const meta = {
  title: "Components/StyleSelector",
  component: StyleSelector,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="flex min-h-[400px] min-w-[400px] items-center justify-center bg-gray-50 p-8 dark:bg-gray-950">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof StyleSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InLightMode: Story = {
  decorators: [
    (Story) => {
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
      }
      return <Story />
    },
  ],
}

export const InDarkMode: Story = {
  decorators: [
    (Story) => {
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
      }
      return <Story />
    },
  ],
}

export const ModernTheme: Story = {
  decorators: [
    (Story) => {
      if (typeof window !== "undefined") {
        document.documentElement.setAttribute("data-theme", "modern")
      }
      return <Story />
    },
  ],
}

export const ElectricYellowTheme: Story = {
  decorators: [
    (Story) => {
      if (typeof window !== "undefined") {
        document.documentElement.setAttribute("data-theme", "electric-yellow")
      }
      return <Story />
    },
  ],
}

export const SocialBlueTheme: Story = {
  decorators: [
    (Story) => {
      if (typeof window !== "undefined") {
        document.documentElement.setAttribute("data-theme", "social-blue")
      }
      return <Story />
    },
  ],
}
