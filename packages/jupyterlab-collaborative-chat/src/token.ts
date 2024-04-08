/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

import { Token } from '@lumino/coreutils';
import { DocumentRegistry } from '@jupyterlab/docregistry';

/**
 * The token for the chat file type.
 */
export const IChatFileType = new Token<IChatFileType>(
  '@jupyter/collaboration:IChatFileType'
);

/**
 * Chat file type.
 */
export type IChatFileType = DocumentRegistry.IFileType;