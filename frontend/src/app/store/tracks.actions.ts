import { createAction, props } from '@ngrx/store';
import { Track, TrackData } from '../models/track.model';

export const fetchTracksRequest = createAction(
  '[Tracks] Fetch Request',
  props<{id: string}>()
);
export const fetchTracksSuccess = createAction(
  '[Tracks] Fetch Success',
  props<{tracks: Track[]}>()
);
export const fetchTracksFailure = createAction(
  '[Tracks] Fetch Failure',
  props<{error: string}>()
);

export const createTrackRequest = createAction(
  '[Tracks] Create Request',
  props<{trackData: TrackData}>()
);
export const createTrackSuccess = createAction(
  '[Tracks] Create Success'
);
export const createTrackFailure = createAction(
  '[Tracks] Create Failure',
  props<{error: string}>()
);
