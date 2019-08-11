import { css } from "styled-components";

const size = {
	// Uses ems instead of px for consistency if user changes various settings
	xsmall: 20, // 320px
	small: 30, // 480px
	medium: 48, // 768px
	large: 64, // 1024px
	xlarge: 90 // 1440px
};

export default Object.keys(size).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${size[label]}em) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});
