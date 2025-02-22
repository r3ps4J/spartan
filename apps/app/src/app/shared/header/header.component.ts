import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { radixGithubLogo, radixTwitterLogo } from '@ng-icons/radix-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HeaderDarkModeComponent } from '~/app/shared/header/header-dark-mode.component';
import { HeaderMobileNavComponent } from '~/app/shared/header/header-mobile-nav.component';
import { SpartanLogoComponent } from '~/app/shared/spartan-logo.component';
import { NavLinkDirective } from '../spartan-nav-link.directive';
import { HeaderThemePickerComponent } from './header-theme-picker.component';

@Component({
	selector: 'spartan-header',
	standalone: true,
	imports: [
		HlmButtonDirective,
		RouterLink,
		HlmIconComponent,
		HeaderThemePickerComponent,
		NavLinkDirective,
		HeaderMobileNavComponent,
		HeaderDarkModeComponent,
		SpartanLogoComponent,
	],
	providers: [provideIcons({ radixTwitterLogo, radixGithubLogo })],
	host: {
		class: 'block sticky w-full top-0 z-40 bg-background/95 bg-blur-lg p-2 sm:px-4 border-b border-border',
	},
	template: `
		<div class="mx-auto flex w-full max-w-screen-xl items-center justify-between">
			<nav class="flex items-center">
				<a hlmBtn variant="ghost" class="mr-3 hidden p-1.5 sm:flex" routerLink="/">
					<spartan-logo class="w-14" />
					<span class="sr-only">spartan</span>
				</a>

				<spartan-mobile-nav class="sm:hidden" />

				<div class="hidden sm:flex sm:space-x-2">
					<a spartanNavLink="/documentation">Documentation</a>
					<a spartanNavLink="/stack">Stack</a>
					<a spartanNavLink="/components">Components</a>
					<a spartanNavLink="/examples">Examples</a>
				</div>
			</nav>

			<div class="flex space-x-2">
				<a href="https://twitter.com/goetzrobin" target="_blank" size="sm" variant="ghost" hlmBtn>
					<span class="sr-only">Twitter</span>
					<hlm-icon name="radixTwitterLogo" size="sm" />
				</a>
				<a href="https://github.com/goetzrobin/spartan" target="_blank" size="sm" variant="ghost" hlmBtn>
					<span class="sr-only">Github</span>
					<hlm-icon name="radixGithubLogo" size="sm" />
				</a>
				<spartan-theme-picker />
				<spartan-dark-mode />
			</div>
		</div>
	`,
})
export class HeaderComponent {}
