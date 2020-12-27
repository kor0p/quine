const fs = require('fs')
const { exec } = require('child_process')
const _file: string = 'deno-js.js'
fs.writeFile(_file,
// [DENO JS] START
`const _file = 'deno-ts.ts'
Deno.writeTextFileSync(_file,
// [DENO TS] START
\`const _file: string = 'psql.sql'
await Deno.writeTextFile(_file,
// [PSQL SQL] START
\\\`CREATE TEMP TABLE __temp__ (data text);
-- [PYTHON] START
\\\\\\\\COPY __temp__ FROM '/home/vc/Code/temp/quine/python.py' CSV ESCAPE '~' DELIMITER '	';
UPDATE __temp__
SET data = REGEXP_REPLACE(data, CHR(92) || CHR(92) || CHR(96), CHR(92) || CHR(96));
\\\\\\\\COPY (SELECT data FROM __temp__) TO '/home/vc/Code/temp/quine/_python.py' CSV ESCAPE '~' DELIMITER '	';
-- [PYTHON] END
DROP TABLE __temp__;
\\\`
// [PSQL SQL] END
)
const p = Deno.run({ cmd: ['psql', '-d', 'postgres', '-f', _file], stdout: 'piped' })
await Deno.stdout.write(await p.output())
p.close()
\`
// [DENO TS] END
)
import('./' + _file)
`, ()=>exec('deno run --allow-read --allow-write --allow-run --allow-env '+_file, (err, r, e)=>console.log(err || r+e)))
// [DENO JS] END
