package com.tidygo.tidygo.entity.enums;

public enum Gender {
    MALE("Nam"),
    FEMALE("Nữ");

    private final String displayName;

    Gender(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
