package com.tidygo.tidygo.repository;

import com.tidygo.tidygo.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

    @Query(value = "SELECT i.* FROM image i " +
            "JOIN service_image si ON i.id = si.image_id " +
            "JOIN service s ON s.id = si.service_id " +
            "WHERE si.service_id = :serviceId", nativeQuery = true)
    List<Image> findImagesByServiceId(@Param("serviceId") Long serviceId);
}
