export declare class Gradient {
  constructor();
  // @ts-ignore
  async connect(): void;
  disconnect(): void;
  initMaterial(): void;
  initMesh(): void;
  shouldSkipFrame(e: number): boolean;
  updateFrequency(e: number): void;
  toggleColor(index: number): void;
  showGradientLegend(): void;
  hideGradientLegend(): void;
  init(): void;
  waitForCssVars(): void;
  initGradientColors(): void;

  initGradient(elementSelector: string): void;
  play(): void;
  pause(): void;
}