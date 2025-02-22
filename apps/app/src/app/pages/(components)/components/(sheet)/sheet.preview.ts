import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { radixCross1 } from '@ng-icons/radix-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/ui-sheet-brain';
import {
	HlmSheetComponent,
	HlmSheetContentComponent,
	HlmSheetDescriptionDirective,
	HlmSheetFooterComponent,
	HlmSheetHeaderComponent,
	HlmSheetTitleDirective,
} from '@spartan-ng/ui-sheet-helm';

@Component({
	selector: 'spartan-sheet-preview',
	standalone: true,
	imports: [
		BrnSheetTriggerDirective,
		BrnSheetContentDirective,
		HlmSheetComponent,
		HlmSheetContentComponent,
		HlmSheetHeaderComponent,
		HlmSheetFooterComponent,
		HlmSheetTitleDirective,
		HlmSheetDescriptionDirective,
		HlmButtonDirective,
		HlmInputDirective,
		HlmIconComponent,
		HlmLabelDirective,
	],
	providers: [provideIcons({ radixCross1 })],
	template: `
		<hlm-sheet side="right">
			<button id="edit-profile" variant="outline" brnSheetTrigger hlmBtn>Edit Profile</button>
			<hlm-sheet-content *brnSheetContent="let ctx">
				<hlm-sheet-header>
					<h3 hlmSheetTitle>Edit Profile</h3>
					<p hlmSheetDescription>Make changes to your profile here. Click save when you're done.</p>
				</hlm-sheet-header>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<label hlmLabel for="name" class="text-right">Name</label>
						<input hlmInput id="name" value="Pedro Duarte" class="col-span-3" />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<label hlmLabel for="username" class="text-right">Username</label>
						<input hlmInput id="username" value="@peduarte" class="col-span-3" />
					</div>
				</div>
				<hlm-sheet-footer>
					<button hlmBtn type="submit">Save Changes</button>
				</hlm-sheet-footer>
			</hlm-sheet-content>
		</hlm-sheet>
	`,
})
export class SheetPreviewComponent {}

export const defaultCode = `
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { radixCross1 } from '@ng-icons/radix-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/ui-sheet-brain';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective,
} from '@spartan-ng/ui-sheet-helm';

@Component({
  selector: 'spartan-sheet-preview',
  standalone: true,
  imports: [
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetFooterComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmButtonDirective,
    HlmInputDirective,
    HlmIconComponent,
    HlmLabelDirective,
  ],
  providers: [provideIcons({ radixCross1 })],
  template: \`
    <hlm-sheet side="right">
      <button id="edit-profile" variant="outline" brnSheetTrigger hlmBtn>Edit Profile</button>
      <hlm-sheet-content *brnSheetContent="let ctx">
        <hlm-sheet-header>
          <h3 hlmSheetTitle>Edit Profile</h3>
          <p hlmSheetDescription>Make changes to your profile here. Click save when you're done.</p>
        </hlm-sheet-header>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <label hlmLabel for="name" class="text-right">Name</label>
            <input hlmInput id="name" value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <label hlmLabel for="username" class="text-right">Username</label>
            <input hlmInput id="username" value="@peduarte" class="col-span-3" />
          </div>
        </div>
        <hlm-sheet-footer>
          <button hlmBtn type="submit">Save Changes</button>
        </hlm-sheet-footer>
      </hlm-sheet-content>
    </hlm-sheet>
  \`,
})
export class SheetPreviewComponent {}`;
export const defaultImports = `
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/ui-sheet-brain';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective,
} from '@spartan-ng/ui-sheet-helm';
`;
export const defaultSkeleton = `
<hlm-sheet>
    <button brnSheetTrigger>Edit Profile</button>
    <hlm-sheet-content *brnSheetContent='let ctx'>
        <hlm-sheet-header>
            <h3 hlmSheetTitle>Edit Profile</h3>
            <p hlmSheetDescription>Make changes to your profile here. Click save when you're done.</p>
        </hlm-sheet-header>
    </hlm-sheet-content>
</hlm-sheet>
`;
