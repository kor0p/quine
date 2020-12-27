CREATE TEMP TABLE __temp__ (data text);
-- [PYTHON] START
\COPY __temp__ FROM '/home/vc/Code/temp/quine/py.py';
\COPY (SELECT data FROM __temp__) TO '/home/vc/Code/temp/quine/_py.py';
-- [PYTHON] END
DROP TABLE __temp__;
