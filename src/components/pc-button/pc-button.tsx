import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

export type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive';

@Component({
  tag: 'pc-button',
  styleUrl: 'pc-button.css',
  shadow: true,
})
export class ButtonComponent {
  @Prop({ reflect: true }) variant: Variant = 'primary';
  @Prop() icon: string;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop({ reflect: true }) disabled = false;
  @Prop() ariaLabel: string;

  @Event() buttonClick: EventEmitter<void>;

  private handleClick = () => {
    console.log('Button clicked');
    this.buttonClick.emit();
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
        {this.icon && <pc-icon name="add" />}
        <span class="button--label">
          <slot />
        </span>
      </button>
    );
  }
}
