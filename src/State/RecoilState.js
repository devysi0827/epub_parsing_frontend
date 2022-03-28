import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import axios from 'axios';


const { persistAtom } = recoilPersist();

export const titleState = atom({
	key: 'title',
	default: 'title is null',
	// effects_UNSTABLE: [persistAtom],
});

export const creatorState = atom({
	key: 'creator',
	default: 'creator is null',
	// effects_UNSTABLE: [persistAtom],
});

export const ManifestState = atom({
	key: 'manifest',
	default: ['null'],
	// effects_UNSTABLE: [persistAtom],
});

export const ContentState = atom({
	key: 'content',
	default: ['null'],
	// effects_UNSTABLE: [persistAtom],
});

export const ImageState = atom({
	key: 'image',
	default: 'null',
	// effects_UNSTABLE: [persistAtom],
});

export const ImageListState = atom({
	key: 'imageList',
	default: {},
	// effects_UNSTABLE: [persistAtom],
});
