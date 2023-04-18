/**
 * This script is used to update this example with some of the common source files
 * shared across all the examples. The source of all the files is the customize-workspace
 * example project.
 */
import FastGlob from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';

async function run() {
	console.log('Common Update');
	console.log('=============');
	console.log();
	console.log(`Platform: ${process.platform}`);
	console.log();

	const customizeSource = path.resolve('../customize-workspace');
	console.log('Customize Workspace Root', customizeSource);
	console.log();

	const commonFilesRaw = await fs.readFile('./scripts/common-files.json', 'utf8');
	const commonFiles = JSON.parse(commonFilesRaw);

	for (const commonFile of commonFiles) {
		let expandedFiles = [];
		if (commonFile.includes('*')) {
			expandedFiles = await FastGlob(path.join(customizeSource, commonFile));
			console.log(path.join(customizeSource, commonFile), expandedFiles)
		} else {
			expandedFiles = [commonFile];
		}

		for (const expandedFile of expandedFiles) {
			const src = path.resolve(path.join(customizeSource, expandedFile));
			const dest = path.resolve(path.join('.', expandedFile));
			console.log('Copying', src);
			console.log('  To', dest);

			// try {
			// 	await fs.mkdir(path.dirname(dest), { recursive: true });
			// } catch { }

			// await fs.copyFile(src, dest);
		}
	}
}

run().catch((err) => console.error(err));
