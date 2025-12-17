import { useIsFetching } from "@tanstack/react-query"
import { BeatLoader } from "react-spinners"

const GlobalLoadingSpinner = () => {
	const isFetching = useIsFetching();

	return (
		<div id="global-loading-spinner">
			<BeatLoader
				color="#007bff"
				loading={!!isFetching}
				size={20}
				speedMultiplier={1.25}
			/>
		</div>
	)
}

export default GlobalLoadingSpinner
