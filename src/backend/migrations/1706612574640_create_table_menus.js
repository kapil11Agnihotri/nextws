module.exports = {
    "up": `
        CREATE TABLE IF NOT EXISTS menus( 
            id varchar(36) PRIMARY KEY,
            parent_id varchar(36) NULL,
            title varchar(255) NULL,
            slug varchar(255) NULL,
            menu_for varchar(255) NULL,
            description text NULL,
            sequence int NULL,
            status tinyint NOT NULL DEFAULT 1,
            is_active tinyint DEFAULT 0,
            is_deleted tinyint DEFAULT 0,
            created_at timestamp NULL,
            updated_at timestamp NULL
        );`,
    "down": `DROP TABLE IF EXISTS menus`
}