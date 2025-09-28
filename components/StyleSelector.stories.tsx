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
        <div className="bg-background flex min-h-[400px] min-w-[500px] items-center justify-center p-8">
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
