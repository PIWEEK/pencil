import { Component, h, Prop } from '@stencil/core';

export type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive';

@Component({
  tag: 'pc-button',
  styleUrl: 'pc-button.css',
  shadow: true,
})
export class Button {
  @Prop({ reflect: true }) variant: Variant = 'primary';
  @Prop() icon: string;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop({ reflect: true }) disabled = false;
  @Prop() ariaLabel: string;

  private handleClick = () => {
    alert('Received the button click!');
  };

  render() {
    return (
      <button
        type={this.type}
        class={`button button--${this.variant}`}
        disabled={this.disabled}
        aria-disabled={this.disabled ? 'true' : null}
        aria-label={this.ariaLabel ? this.ariaLabel : null}
        onClick={this.handleClick}
      >
        {this.icon && <span class="icon">{this.icon}</span>}
        <span class="button--label">
          <slot />
        </span>
      </button>
    );
  }
}
