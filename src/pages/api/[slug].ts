export async function GET({ params }) {
	const {
		slug
	} = params

	return new Response(slug);
}
