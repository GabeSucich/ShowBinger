USE eeg2g2v0xyx50cl3;

CREATE TABLE shows(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    seasons INT NOT NULL,
    episodes_per_season INT NOT NULL,
    minutes_per_episode INT NOT NULL,
    runtime INT NOT NULL,
    watched BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)

