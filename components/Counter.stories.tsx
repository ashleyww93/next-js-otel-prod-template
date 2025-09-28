import type { Meta, StoryObj } from "@storybook/nextjs"
import Counter from "@/components/Counter"

const meta = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithCustomBackground: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="rounded-xl bg-gradient-to-br from-purple-900 to-pink-900 p-8">
        <Story />
      </div>
    ),
  ],
}
