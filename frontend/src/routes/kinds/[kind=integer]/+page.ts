import type { KindMeta } from '../../../../../shared/types';
import { REPO_PUBLIC_URL } from '../../../constants';

export const load = async ({ params }: { params: { kind: string } }) => {
	const res = await fetch(`${REPO_PUBLIC_URL}/kinds/kind${params.kind}.json`);
	const jsonString = await res.text();
	console.log('#HLVitq jsonString', jsonString);
	const json = JSON.parse(jsonString) as KindMeta;
	// const json = (await res.text()) as WORKER_OUTPUT_KIND_SINGLE;

	return { kind: json };
};
