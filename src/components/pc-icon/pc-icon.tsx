import { Component, getAssetPath, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'pc-icon',
  styleUrl: 'pc-icon.css',
  shadow: true,
  assetsDirs: ['icons'],
})
export class IconComponent {
  @Prop() name: string;

  @State() svgContent: string;

  @Watch('name')
  async loadSVG() {
    const asset = getAssetPath(`./icons/${this.name}.svg`);
    const response = await fetch(asset);
    const text = await response.text();
    this.svgContent = text;
  }

  componentWillLoad() {
    this.loadSVG();
  }

  render() {
    return <span class="icon" innerHTML={this.svgContent}></span>;
  }
}
