import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps, ReactNode } from 'react';

function Note(props: ComponentProps<typeof Callout>) {
  return <Callout type="info" {...props} />;
}

function Warning(props: ComponentProps<typeof Callout>) {
  return <Callout type="warning" {...props} />;
}

function CardGroup({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    CardGroup,
    Note,
    Warning,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
