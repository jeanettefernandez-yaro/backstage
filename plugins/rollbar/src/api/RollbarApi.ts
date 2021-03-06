/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApiRef } from '@backstage/core';
import {
  RollbarItemsResponse,
  RollbarProject,
  RollbarTopActiveItem,
} from './types';

export const rollbarApiRef = createApiRef<RollbarApi>({
  id: 'plugin.rollbar.service',
  description:
    'Used by the Rollbar plugin to make requests to accompanying backend',
});

export interface RollbarApi {
  getAllProjects(): Promise<RollbarProject[]>;
  getTopActiveItems(
    project: string,
    hours?: number,
  ): Promise<RollbarTopActiveItem[]>;
  getProjectItems(project: string): Promise<RollbarItemsResponse>;
}
