import type { Meta, StoryObj } from "@storybook/nextjs"
import { Layers, Palette, Zap } from "lucide-react"
import Card from "@/components/Card"

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    hover: {
      control: { type: "boolean" },
      description: "Enable hover effects",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: null,
    hover: true,
  },
  render: () => (
    <Card>
      <h3 className="mb-2 text-lg font-semibold">Card Title</h3>
      <p className="text-muted-foreground">This is a basic card component with default styling.</p>
    </Card>
  ),
}

export const NoHover: Story = {
  args: {
    children: null,
    hover: false,
  },
  render: (args) => (
    <Card hover={args.hover}>
      <h3 className="mb-2 text-lg font-semibold">Static Card</h3>
      <p className="text-muted-foreground">This card has no hover effects.</p>
    </Card>
  ),
}

export const WithIcon: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Card>
      <div className="mb-2 flex items-center gap-3">
        <Zap className="text-primary h-5 w-5" />
        <h3 className="text-primary text-lg font-semibold">Fast Development</h3>
      </div>
      <p className="text-muted-foreground text-sm">Built with Turbopack for lightning-fast HMR and builds.</p>
    </Card>
  ),
}

export const FeatureCards: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card>
        <div className="mb-2 flex items-center gap-3">
          <Zap className="text-primary h-5 w-5" />
          <h3 className="text-primary text-lg font-semibold">Fast Development</h3>
        </div>
        <p className="text-muted-foreground text-sm">Built with Turbopack for lightning-fast HMR and builds.</p>
      </Card>

      <Card>
        <div className="mb-2 flex items-center gap-3">
          <Layers className="text-primary h-5 w-5" />
          <h3 className="text-primary text-lg font-semibold">Modern Stack</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          Next.js 15.5.4 with App Router, React Server Components & Zustand.
        </p>
      </Card>

      <Card>
        <div className="mb-2 flex items-center gap-3">
          <Palette className="text-primary h-5 w-5" />
          <h3 className="text-primary text-lg font-semibold">Beautiful Design</h3>
        </div>
        <p className="text-muted-foreground text-sm">Tailwind CSS 4.1 with Lucide icons and customizable themes.</p>
      </Card>
    </div>
  ),
}

export const WithCustomStyling: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Card className="border-primary bg-primary/5">
      <h3 className="text-primary mb-2 text-lg font-semibold">Custom Styled Card</h3>
      <p className="text-muted-foreground">
        This card has custom border and background colors using the className prop.
      </p>
    </Card>
  ),
}

export const LongContent: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className="max-w-md">
      <Card>
        <h3 className="mb-3 text-xl font-bold">Long Content Example</h3>
        <p className="text-muted-foreground mb-3">
          This card demonstrates how content flows within the card component when there's more text.
        </p>
        <p className="text-muted-foreground mb-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded px-4 py-2 text-sm">
          Learn More
        </button>
      </Card>
    </div>
  ),
}
