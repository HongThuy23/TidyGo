package com.tidygo.tidygo.entity;

import com.tidygo.tidygo.entity.embeded.ServiceImageId;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@Entity
@Table(name = "service_image")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ServiceImage {

    @EmbeddedId
    ServiceImageId serviceImageId;

    @ManyToOne
    @MapsId("serviceId")
    @JoinColumn(name = "service_id")
    Service service;

    @ManyToOne
    @MapsId("imageId")
    @JoinColumn(name = "image_id")
    Image image;
}
