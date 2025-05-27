package com.tidygo.tidygo.entity;

import com.tidygo.tidygo.entity.embeded.FeedbackImageId;

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
@Table(name = "feedback_image")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FeedbackImage {

    @EmbeddedId
    FeedbackImageId feedbackImageId;

    @ManyToOne
    @MapsId("feedbackId")
    @JoinColumn(name = "feedback_id", nullable = false)
    Feedback feedback;

    @ManyToOne
    @MapsId("imageId")
    @JoinColumn(name = "image_id", nullable = false)
    Image image;
}
