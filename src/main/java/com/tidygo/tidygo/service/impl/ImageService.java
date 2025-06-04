package com.tidygo.tidygo.service.impl;

import com.tidygo.tidygo.mapper.ImageMapper;
import com.tidygo.tidygo.repository.ImageRepository;
import com.tidygo.tidygo.response.ImageResponse;
import com.tidygo.tidygo.service.IImageService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ImageService implements IImageService {

    final ImageRepository imageRepository;
    final ImageMapper imageMapper;

    @Override
    public List<ImageResponse> getImagesByServiceId(Long serviceId) {
        return imageMapper.toImageResponse(imageRepository.findImagesByServiceId(serviceId));
    }
}
