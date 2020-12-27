const _file: string = 'psql.sql'
await Deno.writeTextFile(_file,
// [PSQL SQL] START
`CREATE TEMP TABLE __temp__ (data text);
-- [PYTHON] START
\\COPY __temp__ FROM '/home/vc/Code/temp/quine/py.py';
\\COPY (SELECT data FROM __temp__) TO '/home/vc/Code/temp/quine/_py.py';
-- [PYTHON] END
DROP TABLE __temp__;
`
// [PSQL SQL] END
)
const p = Deno.run({ cmd: ['psql', '-d', 'postgres', '-f', _file], stdout: 'piped' })
await Deno.stdout.write(await p.output())
p.close()
