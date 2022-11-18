// Generated by https://github.com/foxglove/schemas

import { Pose } from "./Pose";
import { Time } from "./Time";

/** A single scan from a planar laser range-finder */
export type LaserScan = {
  /** Timestamp of scan */
  timestamp: Time;

  /** Frame of reference */
  frame_id: string;

  /** Origin of scan relative to frame of reference; points are positioned in the x-y plane relative to this origin; angles are interpreted as counterclockwise rotations around the z axis with 0 rad being in the +x direction */
  pose: Pose;

  /** Bearing of first point, in radians */
  start_angle: number;

  /** Bearing of last point, in radians */
  end_angle: number;

  /** Distance of detections from origin; assumed to be at equally-spaced angles between `start_angle` and `end_angle` */
  ranges: number[];

  /** Intensity of detections */
  intensities: number[];
};