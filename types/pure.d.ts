import { LocatorSelectors } from '@vitest/browser/context'
import { SvelteComponent, ComponentProps, ComponentConstructorOptions, ComponentType } from 'svelte'

/**
 * Customize how Svelte renders the component.
 */
export type SvelteComponentOptions<C extends SvelteComponent> = ComponentProps<C> | Partial<ComponentConstructorOptions<ComponentProps<C>>>;
/**
 * Customize how Testing Library sets up the document and binds queries.
 */
export type RenderOptions = {
    baseElement?: HTMLElement;
};
/**
 * The rendered component and bound testing functions.
 */
export interface RenderResult<C extends SvelteComponent> extends LocatorSelectors {
    container: HTMLElement;
    baseElement: HTMLElement;
    component: C;
    debug: (el?: HTMLElement | DocumentFragment) => void;
    rerender: (props: Partial<ComponentProps<C>>) => Promise<void>;
    unmount: () => void;
}
/** Unmount all components and remove elements added to `<body>`. */
export function cleanup(): void;
/**
 * Render a component into the document.
 */
export function render<C extends SvelteComponent>(Component: ComponentType<C>, options?: SvelteComponentOptions<C>, renderOptions?: RenderOptions): RenderResult<C>;

declare module '@vitest/browser/context' {
  interface BrowserPage {
    render: typeof render
  }
}