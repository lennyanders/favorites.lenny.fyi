import { readFile } from 'fs/promises';
import { totalist } from 'totalist';

export const getJsonFiles = async <T>(folder: string) => {
  const filePaths: string[] = [];
  await totalist(folder, (name, path) => {
    if (name !== '_schema.json' && path.endsWith('.json')) filePaths.push(path);
  });

  return await Promise.all<T>(
    filePaths.map(async (filePath) => JSON.parse(await readFile(filePath, { encoding: 'utf-8' }))),
  );
};

export const toReadableList = (list: string[]) => {
  return list.length > 1 ? `${list.slice(0, -1).join(', ')} & ${list[list.length - 1]}` : list[0];
};
