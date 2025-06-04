package com.tidygo.tidygo.service;

import com.tidygo.tidygo.response.ImageResponse;

import java.util.List;

public interface IImageService {
    List<ImageResponse> getImagesByServiceId(Long serviceId);
}
