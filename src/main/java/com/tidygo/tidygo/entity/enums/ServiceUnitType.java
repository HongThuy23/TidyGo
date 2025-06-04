package com.tidygo.tidygo.entity.enums;

public enum ServiceUnitType {
    DAY("ngày"),
    HOUR("giờ"),
    MONTH("tháng");

    private final String displayName;

    ServiceUnitType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
