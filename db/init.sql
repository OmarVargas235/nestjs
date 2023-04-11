SELECT 'CREATE DATABASE omardb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'omardb')\gexec