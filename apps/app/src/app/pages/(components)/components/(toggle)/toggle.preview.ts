import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { radixFontItalic } from '@ng-icons/radix-icons';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnToggleDirective } from '@spartan-ng/ui-toggle-brain';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';

@Component({
	selector: 'spartan-toggle-preview',
	standalone: true,
	imports: [BrnToggleDirective, HlmToggleDirective, HlmIconComponent],
	providers: [provideIcons({ radixFontItalic })],
	template: `
		<button brnToggle hlm>
			<hlm-icon size="sm" name="radixFontItalic" />
		</button>
	`,
})
export class TogglePreviewComponent {}

export const defaultCode = `
import { Component } from '@angular/core';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import { BrnToggleDirective } from '@spartan-ng/ui-toggle-brain';
import { provideIcons } from '@ng-icons/core';
import { radixFontItalic } from '@ng-icons/radix-icons';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'spartan-toggle-preview',
  standalone: true,
  imports: [BrnToggleDirective, HlmToggleDirective, HlmIconComponent],
  providers: [provideIcons({ radixFontItalic })],
  template: \`
    <button brnToggle hlm>
      <hlm-icon size="sm" name="radixFontItalic" />
    </button>
  \`,
})
export class TogglePreviewComponent {}
`;

export const defaultImports = `
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import { BrnToggleDirective } from '@spartan-ng/ui-toggle-brain';
`;
export const defaultSkeleton = `
<button brnToggle hlm>
  <hlm-icon size="sm" name="radixFontItalic" />
</button>
`;
