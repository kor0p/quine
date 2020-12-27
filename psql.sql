CREATE TEMP TABLE __temp__ (data text);
-- [PYTHON] START
\COPY __temp__ FROM '/home/vc/Code/temp/quine/python.py' CSV ESCAPE '~' DELIMITER '	';
UPDATE __temp__
SET data = REGEXP_REPLACE(data, CHR(92) || CHR(92) || CHR(96), CHR(92) || CHR(96));
\COPY (SELECT data FROM __temp__) TO '/home/vc/Code/temp/quine/_python.py' CSV ESCAPE '~' DELIMITER '	';
-- [PYTHON] END
DROP TABLE __temp__;
